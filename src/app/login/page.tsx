'use client';
import { Button } from '@/components/ui/button';
import { login } from '../auth/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email:</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Parol:</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button formAction={login} className="w-full" type="submit">
              Kirish
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
