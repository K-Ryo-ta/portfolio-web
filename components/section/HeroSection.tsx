import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";

const HeroSection = () => {
  return (
    <section className="flex flex-col w-full py-14 items-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full bg-muted shadow-lg ">
              <Image
                src="/kawaiimango.png"
                alt="プロフィール画像"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ryota's Portfolio
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mb-4">
                Web engineer | frontend developer
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#projects">
                <Button className="px-8 shadow-md">プロジェクトを見る</Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="px-8 shadow-md">
                  ブログを読む
                </Button>
              </Link>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
