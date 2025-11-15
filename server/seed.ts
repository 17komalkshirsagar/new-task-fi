import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./models/product";
import { EmiPlan } from "./models/emiPlan";
dotenv.config();
const seedProducts = [
    {
        name: "iPhone 15 Pro",
        slug: "iphone-15-pro",
        variant: "256GB - Deep Purple",
        mrp: 129900,
        price: 119900,
        image: "https://images.unsplash.com/photo-1678652197950-91e3f0a65d0b?w=800&q=80"
    },
    {
        name: "iPhone 15 Pro Max",
        slug: "iphone-15-pro-max",
        variant: "512GB - Titanium Black",
        mrp: 149900,
        price: 139900,
        image: "https://images.unsplash.com/photo-1696446702444-569c47f1b086?w=800&q=80"
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        slug: "samsung-galaxy-s24-ultra",
        variant: "256GB - Phantom Black",
        mrp: 124999,
        price: 114999,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80"
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        slug: "samsung-galaxy-s24-ultra-512gb",
        variant: "512GB - Titanium Gray",
        mrp: 134999,
        price: 124999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
    },
    {
        name: "MacBook Pro M3",
        slug: "macbook-pro-m3",
        variant: "14-inch - 512GB - Space Gray",
        mrp: 199900,
        price: 189900,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
    },
    {
        name: "MacBook Pro M3",
        slug: "macbook-pro-m3-1tb",
        variant: "16-inch - 1TB - Silver",
        mrp: 249900,
        price: 239900,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80"
    }
];
const createEmiPlansForProduct = (productId: any, price: number) => {
    return [
        {
            productId,
            monthlyPayment: Math.round(price / 3),
            tenure: 3,
            interestRate: 0,
            cashback: "Get ₹1000 cashback"
        },
        {
            productId,
            monthlyPayment: Math.round(price / 6),
            tenure: 6,
            interestRate: 0,
            cashback: "Get ₹2000 cashback"
        },
        {
            productId,
            monthlyPayment: Math.round((price * 1.105) / 9),
            tenure: 9,
            interestRate: 10.5,
        },
        {
            productId,
            monthlyPayment: Math.round((price * 1.12) / 12),
            tenure: 12,
            interestRate: 12,
            cashback: "Get ₹3000 cashback"
        }
    ];
};
async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL || "");
        console.log("Connected to MongoDB");
        await Product.deleteMany({});
        await EmiPlan.deleteMany({});
        console.log("Cleared existing data");
        for (const productData of seedProducts) {
            const product = await Product.create(productData);
            console.log(`Created product: ${product.name} - ${product.variant}`);
            const emiPlans = createEmiPlansForProduct(product._id, product.price);
            await EmiPlan.insertMany(emiPlans);
            console.log(`Created ${emiPlans.length} EMI plans for ${product.name}`);
        }
        console.log("\nDatabase seeded successfully!");
        console.log(`Total products: ${seedProducts.length}`);
        console.log(`Total EMI plans: ${seedProducts.length * 4}`);
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
}
seedDatabase();