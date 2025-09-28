import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Payment Successful - Louis Ellis STEM Tutoring",
  description: "Thank you for your payment. Your tutoring session has been confirmed.",
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="font-heading text-3xl font-bold text-gray-900">
            Payment Successful!
          </h1>
          <p className="mt-2 text-gray-600">
            Thank you for your payment. Your tutoring session has been confirmed.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Confirmation Email</p>
                  <p className="text-sm text-gray-600">
                    A confirmation email has been sent to your email address with session details.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Next Steps</p>
                  <p className="text-sm text-gray-600">
                    You'll receive a calendar invite and session link before your scheduled time.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/book">
              Book Another Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Questions? <Link href="/contact" className="text-primary hover:underline">Contact me</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
