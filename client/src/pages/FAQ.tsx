import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            question: "What is Snapmint?",
            answer: "Snapmint is a leading digital payment platform that enables customers to purchase products on EMI (Equated Monthly Installments) without a credit card. We make shopping more affordable and accessible for everyone."
        },
        {
            question: "How does Snapmint EMI work?",
            answer: "With Snapmint, you can purchase products and pay in easy monthly installments. Simply select Snapmint as your payment option at checkout, complete a quick verification process, and pay your first installment. The remaining amount will be automatically deducted from your account over the coming months."
        },
        {
            question: "Do I need a credit card to use Snapmint?",
            answer: "No! That's the beauty of Snapmint. You don't need a credit card to avail EMI facility. You can use your debit card or net banking to make the payments."
        },
        {
            question: "What documents do I need to apply?",
            answer: "You'll need a valid government-issued ID (Aadhaar, PAN card, or Passport), proof of income, and a bank account. The verification process is quick and can be completed online."
        },
        {
            question: "How long does the approval process take?",
            answer: "The approval process is typically instant. Once you submit your documents and details, our system will verify them in real-time, and you'll receive approval within minutes in most cases."
        },
        {
            question: "What is the interest rate on EMI?",
            answer: "Our interest rates vary based on the product, tenure, and your credit profile. We offer competitive rates starting from 0% on selected products. You'll see the exact interest rate and EMI amount before confirming your purchase."
        },
        {
            question: "Can I prepay my EMI?",
            answer: "Yes, you can prepay your EMI at any time without any prepayment charges. Simply log in to your account and select the prepayment option."
        },
        {
            question: "What happens if I miss an EMI payment?",
            answer: "We understand that sometimes circumstances change. If you miss a payment, you'll be charged a late fee as per our policy. We recommend setting up auto-debit to avoid missing payments. If you're facing financial difficulties, please contact our support team."
        },
        {
            question: "Is my personal information safe with Snapmint?",
            answer: "Absolutely! We use bank-grade encryption and security measures to protect your personal and financial information. We are fully compliant with data protection regulations and never share your information with third parties without your consent."
        },
        {
            question: "Which products can I purchase on EMI?",
            answer: "You can purchase a wide range of products on EMI including electronics, home appliances, fashion, furniture, and more from our partner merchants. The availability of EMI depends on the product value and merchant."
        },
        {
            question: "How do I track my EMI payments?",
            answer: "You can easily track all your EMI payments through your Snapmint account dashboard. You'll also receive email and SMS notifications for upcoming payments, payment confirmations, and due date reminders."
        },
        {
            question: "Can I cancel my EMI after purchase?",
            answer: "You can cancel your purchase within the merchant's return policy period. If you cancel, you'll need to pay back any installments you've already received as a benefit. Please refer to our cancellation policy for more details."
        }
    ];
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
                        <p className="text-xl text-gray-600">
                            Find answers to common questions about Snapmint and our EMI services
                        </p>
                    </div>
                    {}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center text-left py-2 hover:text-[#008080] transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                            {faq.question}
                                        </h3>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-[#008080] flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        )}
                                    </button>
                                    {openIndex === index && (
                                        <div className="mt-3 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {}
                    <div className="mt-12 bg-gradient-to-r from-[#008080] to-[#00A8A8] rounded-2xl shadow-lg p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                        <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                            Can't find the answer you're looking for? Our support team is here to help you.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-[#008080] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default FAQ;