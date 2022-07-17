/*
 Navicat Premium Data Transfer

 Source Server         : mongo
 Source Server Type    : MongoDB
 Source Server Version : 40401
 Source Host           : localhost:27017
 Source Schema         : whatsapp

 Target Server Type    : MongoDB
 Target Server Version : 40401
 File Encoding         : 65001

 Date: 15/07/2022 04:30:58
*/


// ----------------------------
// Collection structure for apis
// ----------------------------
db.getCollection("apis").drop();
db.createCollection("apis");

// ----------------------------
// Documents of apis
// ----------------------------
db.getCollection("apis").insert([ {
    _id: ObjectId("62d1805f4b29000082000e92"),
    id: NumberLong("3"),
    token: "off_KllvJh303Dr7qcmEtK3HTqYpAK",
    instance: "445802",
    phone: "972503112787",
    name: "werwerw"
} ]);
db.getCollection("apis").insert([ {
    _id: ObjectId("62d1806d4b29000082000e93"),
    id: NumberLong("4"),
    instance: "7827",
    phone: "972508087412",
    token: "3px6cypvje3xsjmc",
    name: 7827
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("62d0d87f5064bc0124722a10"),
    date: ISODate("2022-07-15T03:01:16.582Z"),
    fullname: "ofir",
    email: "ofirfishler@gmail.com",
    avatar: "//www.gravatar.com/avatar/f9d6bf49395908e0d2101ae7503e460e?s=200&rating=pg&default=mm",
    password: "$2a$10$AeHe7bcJH/EDHp0PIyGlPuR6O7wwsFefOvPFDM1Hwh229mmsHIa6K",
    level: "0",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62d0d8eaee8eac58d0398a1e"),
    date: ISODate("2022-07-15T03:02:41.656Z"),
    fullname: "rabbit",
    email: "rabbit@gmail.com",
    avatar: "//www.gravatar.com/avatar/3776d84bc31b8e58f37795fc61fa598d?s=200&rating=pg&default=mm",
    password: "$2a$10$HiAONi6GCmm8qj6Elq0IIenR.kyX8nDIVsE4EnjyWcIKLn4Rrk0Yu",
    level: "2",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62d0d928d9ba9b58e0f9bd28"),
    date: ISODate("2022-07-15T03:03:45.932Z"),
    fullname: "worker",
    email: "worker@gmail.com",
    avatar: "//www.gravatar.com/avatar/1840d465867ef451f94498a12e3506d1?s=200&rating=pg&default=mm",
    password: "$2a$10$bDE5xAodX0kg/NyScpon2eatqqk5efRII9of9unF8XTzvytSNEujW",
    level: "2",
    __v: NumberInt("0")
} ]);
