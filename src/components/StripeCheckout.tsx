"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeCheckoutProps {
  priceId: string;
  children: React.ReactNode;
  className?: string;
}

export function StripeCheckout({ priceId, children, className }: StripeCheckoutProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error("Stripe failed to load");
      }

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          quantity: 1,
        }),
      });

      const { sessionId } = await response.json();

      if (!sessionId) {
        throw new Error("Failed to create checkout session");
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error("Stripe checkout error:", error);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
    >
      {loading ? "Processing..." : children}
    </Button>
  );
}
