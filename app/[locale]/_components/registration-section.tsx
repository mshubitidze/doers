import { LineContainer } from "@/components/simple-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

export function RegistrationSection() {
  const t = useTranslations("HomePage");
  return (
    <LineContainer>
      <section id="registration" className="sm:px-24 sm:pt-8 sm:pb-16">
        <Card className="w-full border-none rounded-none bg-transparent shadow-none">
          <CardHeader className="text-center sm:mb-12">
            <CardTitle className="text-5xl font-bold mb-2">
              {t("registration.title")}
            </CardTitle>
            <CardDescription className="text-lg">
              {t("registration.subtitle")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">
                {t("registration.steps.title")}
              </h2>
              <p className="mb-4">{t("registration.steps.subtitle")}</p>
              <ul className="space-y-4">
                {["1", "2", "3", "4"]
                  .map((step) => ({
                    title: t(`registration.steps.${step}.title`),
                    description: t(`registration.steps.${step}.description`),
                  }))
                  .map((step) => (
                    <li
                      key={step.title}
                      className="grid grid-cols-[16px,1fr] gap-x-2 items-start"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                      <div>
                        <span className="font-semibold">{step.title}</span>
                        <p className="mt-1">{step.description}</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex-1 space-y-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Email Address" type="email" />
              <div className="flex space-x-2">
                <Select>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="+995" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+995">+995</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Phone Number" className="flex-1" />
              </div>
              <Input placeholder="How did you hear about us?" />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm">
                  I agree to my data being used to respond to my request.
                </label>
              </div>
              <Button className="w-full">Submit</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </LineContainer>
  );
}
