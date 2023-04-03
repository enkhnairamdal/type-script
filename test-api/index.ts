import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

interface School {
    name: string;
}

interface Student {
    name: string;
    age?: number;
    isVerified: boolean;
    payment?: PaymentType;
    school?: School;
}

const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
    const message: PaymentType = "QPAY";
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

function studentReport(student: Student) {
    // student.name
}

function sum(a: number, b: number) {
    return a + b;
}

type Mixed = string | number | boolean;

type PaymentType = "CASH" | "QPAY" | "CARD";

function greeting(message: PaymentType) {
    console.log(message);
}