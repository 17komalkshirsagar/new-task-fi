export const createProductRules = {
    name: { required: true, type: "string" },
    variant: { required: true, type: "string" },
    mrp: { required: true, type: "number" },
    price: { required: true, type: "number" },
    image: { required: true, type: "string" },
};
export const updateProductRules = {
    name: { required: false, type: "string" },
    variant: { required: false, type: "string" },
    mrp: { required: false, type: "number" },
    price: { required: false, type: "number" },
    image: { required: false, type: "string" },
};
export const createEmiPlanRules = {
    productId: { required: true, type: "string" },
    monthlyPayment: { required: true, type: "number" },
    tenure: { required: true, type: "number" },
    interestRate: { required: true, type: "number" },
    cashback: { required: false, type: "string" },
};
export const updateEmiPlanRules = {
    productId: { required: false, type: "string" },
    monthlyPayment: { required: false, type: "number" },
    tenure: { required: false, type: "number" },
    interestRate: { required: false, type: "number" },
    cashback: { required: false, type: "string" },
};