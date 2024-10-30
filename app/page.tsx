import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            養育費管理アプリケーション
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            シンプルで使いやすい養育費の管理・記録ツール
          </p>
          <div className="space-x-4">
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">
                新規登録
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline">
                ログイン
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">簡単な初期設定</h3>
            <p className="text-gray-600">
              メールアドレスとパスワードで簡単に始められます
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">明確な金額管理</h3>
            <p className="text-gray-600">
              項目ごとの金額を分かりやすく管理できます
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">使用履歴の記録</h3>
            <p className="text-gray-600">
              養育費の使用状況を簡単に記録・確認できます
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}