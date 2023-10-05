
// const s3 = require('../S3_connect');


// //s3 = new AWS.S3({apiVersion: '2006-03-01'});


// var bucketParams = {
//   //Bucket : process.argv[2]
//   Bucket: bucketName
// };



const AWS = require('aws-sdk');
const AWS_ACCESS_KEY_ID = "AKIAUJJNYH3XFREQY44N";
const AWS_SECRET_ACCESS_KEY = "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";
const bucketName = "study-files";
const bucketParams = {
  Bucket: bucketName,
};

// Set AWS credentials
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: 'ap-south-1' // Specify your desired AWS region
});


const s3 = new AWS.S3();

const createBucket = ()=>{

s3.createBucket(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Location);
  }
});
}


const uploadFile = (req,res)=>{


    if(!req.files || req.files.length === 0){
        return res.status(400).send("No files uploaded")
    }
    const uploadfiles = req.files.map((file)=>{

    const uploadparams = {
      Bucket : bucketName,
      Key : file.originalname,
      Body : file.buffer,
      s3:s3,
      acl:"public_read",
      // key:(req,file,cb)=>{}
    }
        return s3.upload(uploadparams).promise()
    })

    Promise.all(uploadfiles)
    .then(  data =>{
      data.forEach(element => {
        console.log("file upload successfully")
      });
    }) 
    .catch((error) => {
      console.error("Error uploading files:", error);
      res.status(500).send("Error uploading files");
    });
}


const listFiles = (req,res)=>{

  s3.listObjectsV2(bucketParams, (err, data) => {
    if (err) { 
      console.error('Error listing objects:', err);
      res.status(500).send("Error listing files");
    } else {
      console.log('Objects in the bucket:', data.Contents);
      res.status(200).send({"files":data.Contents});
    }
  });


}


module.exports = {
  createBucket,
  uploadFile,
  listFiles
}