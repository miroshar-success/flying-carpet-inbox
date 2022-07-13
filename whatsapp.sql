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

 Date: 13/07/2022 13:02:29
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
    _id: ObjectId("62cdd23e2f28bdc08083ee04"),
    id: NumberInt("1"),
    token: "3px6cypvje3xsjmc",
    instance: "7827",
    phone: "972508087412",
    __v: NumberInt("0")
} ]);
db.getCollection("apis").insert([ {
    _id: ObjectId("62ce844fad6f384d30d7e388"),
    id: NumberInt("2"),
    token: "off_KllvJh303Dr7qcmEtK3HTqYpAK",
    instance: "445802",
    __v: NumberInt("0"),
    phone: "972503112787"
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
    _id: ObjectId("62ce6e9f29fa1224e4edfc0e"),
    date: ISODate("2022-07-13T07:04:32.588Z"),
    fullname: "rabbit",
    email: "rabbit@gmail.com",
    avatar: "//www.gravatar.com/avatar/3776d84bc31b8e58f37795fc61fa598d?s=200&rating=pg&default=mm",
    password: "$2a$10$uPLLb09Wnp2/PLb5ckN/T.aOYIMLMfteGx3CrR/ydkxtz4B2JkC3.",
    __v: NumberInt("0"),
    level: 1
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62ce73a959c22c75f4247f74"),
    date: ISODate("2022-07-13T07:13:48.286Z"),
    fullname: "www",
    email: "www@gmail.com",
    avatar: "//www.gravatar.com/avatar/e7d5f06305d1d6779a5674ffb72f937a?s=200&rating=pg&default=mm",
    password: "$2a$10$uoZ/zwfM3HDFRl4gcDlhfefP.JWDuiyxBdSA5i5KEVavh8p3D04d2",
    level: 2,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62ce7c3e4ef79a49402c2d4e"),
    date: ISODate("2022-07-13T07:44:14.978Z"),
    fullname: "222",
    email: "222@gmail.com",
    avatar: "//www.gravatar.com/avatar/b598cdc028207e2bcc88d9dbe87017e6?s=200&rating=pg&default=mm",
    password: "$2a$10$rt95jQ1mLkuWgfpGd6CgkOPKE0Tk/js2Gxsxvqo6A/0g8gs3DgyYO",
    __v: NumberInt("0"),
    level: 2
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62ce9050a6dece6d24eeffdc"),
    date: ISODate("2022-07-13T09:22:38.627Z"),
    fullname: "123",
    email: "123@gmail.com",
    avatar: "//www.gravatar.com/avatar/97c7b5651d1d70bcab14249e0cc93520?s=200&rating=pg&default=mm",
    password: "$2a$10$BwGfAY/E6OhJiBH35gM5zutGAl9Td4OsSIF/DHelZfuVJ9WLU0oua",
    __v: NumberInt("0"),
    level: 2
} ]);
