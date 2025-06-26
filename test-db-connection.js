const aiDatabase = require('./services/aiDatabase');

async function testDatabaseConnection() {
  console.log('🔌 Testing AI Database connection...');
  
  try {
    // Connect to database
    await aiDatabase.connect();
    console.log('✅ Database connected successfully');
    
    // Test user creation with the new AI user
    console.log('👤 Testing user creation...');
    const testUser = {
      firebaseUid: 'test-connection-user',
      email: 'test.connection@example.com',
      fullName: 'Test Connection User'
    };
    
    const user = await aiDatabase.findOrCreateUser(testUser);
    console.log('✅ User creation successful:', user.id);
    
    // Test enhanced career profile save
    console.log('💼 Testing enhanced career profile save...');
    const enhancedData = {
      targetPosition: {
        title: 'Software Developer',
        industry: 'Technology'
      },
      enhancedProfile: {
        optimized_profile: {
          elevator_pitch: 'Test professional summary',
          value_proposition: 'Test career objectives'
        },
        skills_positioning: {
          primary_skills: ['JavaScript', 'React', 'Node.js']
        }
      }
    };
    
    const profile = await aiDatabase.saveEnhancedCareerProfile(user.id, enhancedData);
    console.log('✅ Enhanced career profile save successful:', profile.id);
    
    console.log('🎉 All database tests passed!');
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
    console.error('Error details:', error.message);
    console.error('Stack trace:', error.stack);
  } finally {
    await aiDatabase.disconnect();
    console.log('👋 Database disconnected');
  }
}

testDatabaseConnection(); 