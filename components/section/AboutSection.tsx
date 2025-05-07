import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="flex flex-col w-full py-20 bg-muted items-center">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            技術スタック
          </h2>
          <p className="items-center">
            <img src="https://skillicons.dev/icons?theme=dark&perline=7&i=next,react,ts,html,css,js,figma,python,fastapi,docker,gcp,dart,firebase,supabase,flutter,prisma" />
          </p>
          <p className="max-w-[85%] leading-normal text-2xl sm:leading-7 mb-4">
            React、Next.js
          </p>
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            経歴
          </h2>
          <div className="w-full max-w-full space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2020 - 現在</h3>
                    <p className="text-sm text-muted-foreground">
                      シニアフロントエンド開発者
                    </p>
                    <p>大規模なウェブアプリケーションの開発とチームリード</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2018 - 2020</h3>
                    <p className="text-sm text-muted-foreground">
                      ウェブ開発者
                    </p>
                    <p>スタートアップでのフルスタック開発</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2016 - 2018</h3>
                    <p className="text-sm text-muted-foreground">
                      フリーランス開発者
                    </p>
                    <p>様々なクライアントプロジェクトの開発</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
