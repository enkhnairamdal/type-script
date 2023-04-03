"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
    const message = "QPAY";
    greeting(message);
    const c = sum(13, 24);
    studentReport({
        name: "Bold",
        // age: 19,
        isVerified: true,
    });
    res.send("Express + TypeScript");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
function studentReport(student) {
    // student.name
}
function sum(a, b) {
    return a + b;
}
function greeting(message) {
    console.log(message);
}
