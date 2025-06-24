const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const roleBasedData = async (req, res, next) => {
  try {

    // find role based on rolename
    const role = await prisma.role.findUnique({
      where: {
        name: req.body.rolename,
      },
    });

    if (!role) {
      return res.status(404).json({ error: "Role not found" });
    }

    req.body.roleId = role.id;

    // Additional checks based on the role

    if (role.name === "Realtor") {
      req.body.realtorData = {
        businessName: req.body.businessName,
        businessAddress: req.body.businessAddress || null,
        realEstateLicenseNumber: req.body.realEstateLicenseNumber,
        yearsOfExperience: req.body.experienceYears,
        affiliatedAssociations: req.body.affiliatedAssociations || null,
        areasCovered: req.body.areasCovered,
        specialties: req.body.specialties,
        portfolioWebsite: req.body.portfolioLink || null,
        businessRegistration: req.body.registrationNumber,
        workType:
          req.body.workType == "Brokerage" ? "BROKERAGE" : "INDEPENDENT",
        brokerageName: null,
        teamMembers: parseInt(req.body.teamMembers, 10),
        officeLocationAvailable:
          JSON.parse(req.body.officeLocationAvailable) || false,
        virtualPropertyTour: JSON.parse(req.body.virtualPropertyTour) || false,
      };

      if (req.body.realtorData.workType == "BROKERAGE") {
        req.body.realtorData.brokerageName = req.body.brokerageName;
      }
    } else if (role.name === "Car Dealership") {
      req.body.carDealershipData = {
        showroomLocations: req.body.showroomLocations,
        testDrivePolicy: req.body.testDrivePolicy,
        financingOptions: req.body.financingOptions,
        tradeInAvailable: JSON.parse(req.body.tradeInOptions) || false,
        serviceWarrantyInfo: req.body.serviceWarrantyInfo,
        businessRegistration: req.body.businessRegistration,
        businessName: req.body.businessName,
        yearsInBusiness: req.body.yearsInBusiness,
        dealershipLicenseNumber: req.body.dealershipLicenseNumber,
        carBrandsSold: req.body.carBrandsSold,
        newOrUsedCars: req.body.newOrUsedCars,
      };
    } else if (role.name === "Immigration Consultant") {
      req.body.immigrationConsultantData = {
        countriesServed: req.body.countriesServed,
        consultationFee: Number(req.body.consultationFee) || null,
        businessRegistration: req.body.businessRegistration,
        partneredLegalFirms: req.body.legalFirms || null,
        businessName: req.body.businessName,
        businessAddress: req.body.businessAddress,
        yearsOfExperience: req.body.yearsOfExperience,
        licenseNumber: req.body.licenseNumber,
        servicesOffered: req.body.servicesOffered,
        websiteOrSocialMedia: req.body.websiteLink || null,
        languagesSpoken: req.body.languagesSpoken,
      };
    }

    next();
  } catch (error) {
    console.error("Error in roleBasedData middleware:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = roleBasedData;
