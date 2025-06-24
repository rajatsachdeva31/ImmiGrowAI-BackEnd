const express = require('express');
const verifyToken = require('../../middleware/authMiddleware');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const statsRouter = express.Router();

statsRouter.get('/stats', async (req, res) => {
    try {
        // Total users count
        const totalUsers = await prisma.user.count();

        // Verified and unverified users count
        const verifiedUsers = await prisma.user.count({ where: { userVerified: true } });
        const unverifiedUsers = totalUsers - verifiedUsers;

        const noOfImmigrant = await prisma.user.count({ where: { roleId: 1 } });

        const usersByMonth = await prisma.user.findMany({
            select: {
                createdAt: true
            }
        });
    
        // Group data by month
        const monthlyCounts = usersByMonth.reduce((acc, user) => {
            const month = new Date(user.createdAt).toLocaleString('default', { month: 'short', year: 'numeric' });
            acc[month] = (acc[month] || 0) + 1;
            return acc;
        }, {});
    
        // Convert to array format
        const formattedData = Object.entries(monthlyCounts).map(([month, count]) => ({
            month,
            count
        }));

        // Total house and car listings
        const houseListings = await prisma.houseListing.count();
        const carListings = await prisma.carListing.count();

        // User type distribution (bar graph)
        const userTypes = await prisma.user.groupBy({
            by: ['roleId'],
            _count: { id: true }
        });

        // Fetch role names based on roleId
        const roles = await prisma.role.findMany();
        const roleMap = Object.fromEntries(roles.map(role => [role.id, role.name]));

        // Format user type graph data
        const userTypeGraph = userTypes.map(type => ({
            userType: roleMap[type.roleId] || 'Unknown',
            count: type._count.id
        }));

        res.json({
            totalUsers,
            verifiedUsers,
            unverifiedUsers,
            formattedData,
            noOfImmigrant,
            houseListings,
            carListings,
            userTypeGraph,
            verificationPieChart: [
                { label: 'Verified', value: verifiedUsers },
                { label: 'Unverified', value: unverifiedUsers }
            ]
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await prisma.$disconnect();
    }
});

module.exports = statsRouter;
