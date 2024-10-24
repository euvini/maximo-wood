'use client'
import { InspirationSection } from "@/components/carousel/inspirationsSection";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ProductCard } from "@/components/productCard/productCard";
import { H1, H2, H5, ParagraphLarge, ParagraphMedium, SubtitleMediumBold } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { Routes } from "@/enums/routes";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <section className="flex bg-neutral-1000 w-full justify-center">
        <div className="flex max-w-screen-2xl px-[72px] pt-[56px]">
          <div className="text-white w-full flex flex-col gap-9 justify-center">
            <H1 className="text-white">
              The Wood
              That Sets
              the Standard
            </H1>
            <ParagraphMedium className="max-w-[465px]">
              Maximo combines decades of natural resilience with advanced thermal innovation, offering wood that stands the test of time—in any climate, for any project.
            </ParagraphMedium>
            <Button className="gap-1 w-fit bg-white text-neutral-1000">
              <a href={Routes.home}>
                Our Materials
              </a>
              <ArrowRight />
            </Button>
          </div>
          <Image
            src={"/images/grant-ritchie-FBkrQhnLQoY-unsplash.png"}
            alt="logo"
            width={688}
            height={688}
            className="max-w-[688px] w-full h-full"
          />
        </div>
      </section>

      <section className="flex bg-white w-full justify-center">
        <div className="flex max-w-screen-2xl px-[72px] py-[120px] w-full justify-end">
          <ParagraphLarge className="max-w-[744px]">
            Every Maximo board is handpicked for quality, sustainability, and unmatched stability. Our range includes both timeless hardwoods and thermally modified woods, giving you the flexibility to choose between classic beauty and modern performance. With Maximo, you’re not just choosing wood—you’re choosing a legacy of craftsmanship, built for the future. Explore the possibilities and discover the wood that redefines excellence.
          </ParagraphLarge>
        </div>
      </section>

      <section className="flex bg-brand-ipe-yellow/15 w-full justify-center">
        <div className="flex flex-col max-w-screen-2xl md:py-[120px] md:px-[174px] gap-24">
          <H2 className="text-center">
            The best of both worlds for your construction
          </H2>
          <div className="flex justify-between">
            <div className="flex flex-col gap-10 max-w-[413px] items-center text-center">
              <Image src={"/images/Ellipse1.png"} alt={"Ellipse1"} width={120} height={120} />
              <SubtitleMediumBold>
                Thermo
              </SubtitleMediumBold>
              <ParagraphLarge>
                Using only heat and steam, Maximo's patented process dramatically reduces the wood's sugar and moisture content, making it unattractive to bugs and exceptionally lightweight. Perfect for enhancing walls, ceilings, and more, both indoors and outdoors.
              </ParagraphLarge>
              <Button variant='link' className="flex-col">
                <div className="flex gap-1">
                  <a href={Routes.hardwood}>
                    Explore Maximo Thermo
                  </a>
                  <ArrowRight />
                </div>
                <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-10 max-w-[413px] items-center text-center">
              <Image src={"/images/Ellipse2.png"} alt={"Ellipse1"} width={120} height={120} />
              <SubtitleMediumBold>
                Hardwood
              </SubtitleMediumBold>
              <ParagraphLarge>
                Our premium hardwoods are handpicked for quality and durability. Sourced from sustainably managed forests, each piece is graded premium on all four sides, making them ideal for demanding applications like decking, boardwalks, and more.
              </ParagraphLarge>
              <Button variant='link' className="flex-col">
                <div className="flex gap-1">
                  <a href={Routes.hardwood}>
                    Explore Maximo Hardwood
                  </a>
                  <ArrowRight />
                </div>
                <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
              </Button>
            </div>
          </div>
        </div>
      </section >

      <section className="flex bg-white w-full justify-center">
        <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[174px] gap-12">
          <div className="flex justify-between w-full">
            <H2 className="text-brand-graphite uppercase">Our Products</H2>
            <Button variant='link' className="flex-col">
              <a href={Routes.allProducts} className="flex gap-1">
                All products
                <ArrowRight />
              </a>
              <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
            </Button>
          </div>

          <div className="flex gap-8 w-full">
            {
              Array.from({ length: 3 }).map((_, index) => (
                <ProductCard />
              ))
            }
          </div>
        </div>
      </section>

      <section className="flex bg-white w-full justify-center">
        <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] border-y border-neutral-1000 gap-10">
          <div className="flex justify-between w-full">
            <H2 className="text-brand-graphite max-w-[814px] uppercase hover:text-brand-ipe-yellow cursor-pointer transition-colors">
              Inspiration for architects and designers
            </H2>

            <Button variant='link' className="flex-col">
              <a href="" className="flex gap-1">
                All projects
                <ArrowRight />
              </a>
              <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
            </Button>
          </div>

          <div>
            <InspirationSection />

          </div>
        </div>
      </section>

      <section className="flex bg-white w-full justify-center">
        <div className="flex flex-col justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-20">
          <div className="flex gap-[78px]">
            <Image src={"/images/Rectangle12.png"} alt={"Rectangle12"} width={365} height={416} className="h-full" />
            <div className="relative flex flex-col gap-8 text-brand-graphite">
              <H2 className="max-w-[80%]">
                Rooted in Responsibility: Our Commitment to Sustainable Wood
              </H2>
              <ParagraphLarge>
                Sustainability is at the heart of everything we do at Maximo Wood. From sourcing responsibly managed woodlands to supporting communities in Brazil that depend on forests for their livelihoods, we’re committed to making a positive impact. Our products are backed by certifications like FSC and PEFC, ensuring our wood is sourced with care for both people and the planet.
              </ParagraphLarge>
            </div>
          </div>

          <div className="relative flex gap-8 items-center max-h-[189px]">
            <div className="max-h-[189px] max-w-[189px]">
              <Image src={"/logos/FSC_C116010_Promotional_with_text_Portrait_BlackOnWhite_r_2Y5lcA 1.png"} alt={"FSC_C116010"} width={189} height={189} className="object-contain h-full" />
            </div>
            <div className="max-h-[189px] max-w-[189px]">
              <Image src={"/logos/UNICONSULT_LOGO-_1_ 1.png"} alt={"UNICONSULT_LOGO"} width={189} height={189} className="object-contain h-full" />
            </div>
            <div className="max-h-[189px] max-w-[189px]">
              <Image src={"/logos/PEFC_LOGO.png"} alt={"PEFC_LOGO"} width={189} height={189} className="object-contain h-full" />
            </div>
            <div className="max-h-[189px] max-w-[189px]">
              <Image src={"/logos/EPD_LOGO1.png"} alt={"EPD_LOGO1"} width={189} height={189} className="object-contain h-full" />
            </div>
            <div className="max-h-[189px] max-w-[189px]">
              <Image src={"/logos/USGBC_LOGO1.png"} alt={"USGBC_LOGO1"} width={189} height={189} className="object-contain h-full" />
            </div>
            <div className="max-h-[189px] max-w-[189px]">
              <Image src={"/logos/TIMBER-TRUST_LOGO.png"} alt={"TIMBER-TRUST_LOGO"} width={189} height={189} className="object-contain h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex bg-brand-ipe-yellow/15 w-full justify-center">
        <div className="flex justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-8">
          <Image src={"/images/wood_draw.png"} alt={"wood_draw"} width={709} height={561} />
          <div className="flex flex-col items-center gap-8 max-w-[453px] text-center">
            <H5>
              Product samples
            </H5>
            <ParagraphLarge>
              Feel the quality of Maximo Wood. Get your sample and discover the difference at your fingertips.
            </ParagraphLarge>
            <Button className="w-fit">
              Order samples
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div >
  );
}
