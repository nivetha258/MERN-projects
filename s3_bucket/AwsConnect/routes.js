const router = require('express').Router();

console.log('CHECK')


const Dashboard = require('../Dashboard Data/Dashboard');
const Adminuser = require('../Admin user/Admin_user');
const Admin_edit = require('../Admin edit/Admin_edit')

// DashboardData 
    router.get('/api/Dashboard',Dashboard.DashboardData);
    router.get('/api/Dashboard_check',Dashboard.DashboardData_check);
    router.post('/api/table/data',Dashboard.tableData);


router.get('/api/Dashboard1', Dashboard.GetDashData);



router.post('/api/table/data', Dashboard.tableData);

// Adminuser
router.get('/api/domain', Adminuser.Domain);
router.post('/api/select/domain', Adminuser.domainSelect);
router.post('/api/domain/Insert', Adminuser.domainInsert);
router.put('/api/domai/update/:domainId', Adminuser.updateDomain);
router.put('/api/course/update/:topicId', Adminuser.updateCourse);

router.get('/api/level/list', Adminuser.levelList);
router.post('/api/course/add', Adminuser.courseAdd);
router.get('/api/domai/course', Adminuser.GetDomain_Course);

// Admin_edit

router.post('/api/course/level',Admin_edit.courseLevel);
router.post('/api/get/subTopics',Admin_edit.getSubTopics);
router.post('/api/subTopics/add',Admin_edit.addSubTopic);
router.post('/api/subTopics/edit',Admin_edit.editSubTopic);


const employeeData = require("../EmployeeData/employeeData")

    router.get('/courseList/:id',employeeData.userCourseList)
    router.get('/subTopicCount',employeeData.subTopicCount) 
    router.get('/api/getdata',employeeData.getdata);

    router.post('/updatestatus',employeeData.updatestatus) 
    router.post('/insertusers',employeeData.InsertUser)          
    router.post('/api/logindata',employeeData.logindata)
    router.post('/api/domain',employeeData.domaingetdata)
    router.post('/api/userchange',employeeData.Userchange)
    router.put('/updateuser/:User_Id',employeeData.Userupdate)     
       
 // employeeData ends ----------- 
    const multer = require("multer")
    const storage = multer.memoryStorage()
    // const upload = multer({storage})
    const upload = multer({
        storage: multerS3({
          s3: s3,
          bucket: "your-s3-bucket-name",
          key: function (req, file, cb) {
            cb(null, file.originalname);
          },
        }),
      });

    const s3bucket = require("../AwsConnect/S3add")


    router.post('/uploadfile',upload.array('files'),s3bucket.uploadFile)
    router.get('/listfile',s3bucket.listFiles)


module.exports = router;