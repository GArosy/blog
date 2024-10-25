import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full py-6">
      <h1 className="text-xl font-bold mb-6">
        最新博客文章
      </h1>
      <div className="space-y-8">
        {/* 文章列表 */}
        {Array.from({ length: 10 }).map(
          (_, i) => (
            <article
              key={i}
              className="border-b pb-6"
            >
              <Button
                variant="link"
                className="text-xl p-0"
              >
                文章标题{i + 1}
              </Button>
              <p className="text-gray-600 mb-4">
                发布日期：2024年3月15日
              </p>
              <p className="text-gray-800">
                这里是文章摘要，简要介绍文章内容...
              </p>
            </article>
          )
        )}
      </div>
    </main>
  );
}
