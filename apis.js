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

 Date: 17/07/2022 09:22:05
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
