import React from "react";
import logo from "../assets/nzlogo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companies from "../data/companies.json";
import faqs from "../data/faqs.json";
import Autoplay from "embla-carousel-autoplay";
import HomeBanner from "../assets/home-banner.jpeg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center  text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find your dream job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            {" "}
            and get <img src={logo} alt="logo" className="h-14 sm:24 lg:32" />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/job">
          <Button variant="blue" size="xl">
            {" "}
            Find a Job
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map((company) => {
            return (
              <CarouselItem
                key={company.id}
                className="basics-1/3 lg:basis-1/6 list-none"
              >
                <img
                  src={company.path}
                  alt={company.name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div>
        <img src={HomeBanner} className="w-full" alt="Home Banner" />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications and more
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>
      <section>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger> {faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </main>
  );
};

export default LandingPage;
