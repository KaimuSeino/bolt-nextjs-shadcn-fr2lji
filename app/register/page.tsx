"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Register() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [expenses, setExpenses] = useState([{ name: "", amount: "" }]);

  const addExpense = () => {
    setExpenses([...expenses, { name: "", amount: "" }]);
  };

  const updateExpense = (index: number, field: "name" | "amount", value: string) => {
    const newExpenses = [...expenses];
    newExpenses[index][field] = value;
    setExpenses(newExpenses);
  };

  const handleRegistration = () => {
    // 実際のアプリケーションでは、ここでユーザー登録処理を行います
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>アカウント登録</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">パスワード</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payer-email">支払者のメールアドレス</Label>
                <Input id="payer-email" type="email" placeholder="payer@email.com" />
              </div>
              <Button className="w-full" onClick={() => setStep(2)}>
                次へ
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">養育費の項目設定</h3>
              {expenses.map((expense, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>項目名</Label>
                    <Input
                      value={expense.name}
                      onChange={(e) => updateExpense(index, "name", e.target.value)}
                      placeholder="例：学費"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>金額 (円)</Label>
                    <Input
                      value={expense.amount}
                      onChange={(e) => updateExpense(index, "amount", e.target.value)}
                      type="number"
                      placeholder="30000"
                    />
                  </div>
                </div>
              ))}
              <div className="flex gap-4">
                <Button variant="outline" onClick={addExpense}>
                  項目を追加
                </Button>
                <Button onClick={() => setStep(3)}>次へ</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">確認</h3>
              <div className="border rounded-lg p-4 space-y-2">
                {expenses.map((expense, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{expense.name}</span>
                    <span>{expense.amount}円</span>
                  </div>
                ))}
              </div>
              <Button className="w-full" onClick={handleRegistration}>
                登録を完了する
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}