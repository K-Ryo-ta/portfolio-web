import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="flex flex-col w-full py-20 bg-muted items-center">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col gap-4 text-center">
          <div className="flex flex-col gap-6 mb-10">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              技術スタック
            </h2>
            <h3 className="text-2xl font-bold leading-[1.1] text-center">
              ハッカソン,インターン,個人開発で複数回使用経験あり
            </h3>
            <p className="mx-auto">
              <img src="https://skillicons.dev/icons?theme=dark&perline=7&i=next,react,ts,html,css,js,supabase" />
            </p>
            <h3 className="text-2xl font-bold leading-[1.1] text-center">
              ハッカソンで何回か使用経験あり
            </h3>
            <p className="items-center mx-auto">
              <img src="https://skillicons.dev/icons?theme=dark&perline=8&i=figma,python,fastapi,docker,gcp,dart,flutter,prisma" />
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            経験
          </h2>
          <div className="w-full max-w-full space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 px-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">サークル</h3>
                    <p className="text-sm text-muted-foreground">
                      2023年5月〜2024年12月
                    </p>
                    <p>
                      エンジニアコミュニティ
                      <br />
                      「あまてく」
                      <br />
                      副代表
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">活動</h3>
                    <p className="text-sm text-muted-foreground">
                      ハッカソン、学会
                    </p>
                    <p>
                      ハッカソン計11回参加、
                      <br />
                      ハッカソン運営も経験
                      <br />
                      学会参加
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">学業</h3>
                    <p className="text-sm text-muted-foreground">成績優秀者</p>
                    <p>一年次に成績優秀者として表彰</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/experience">
              <Button variant="outline" className="gap-1">
                経験を詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
