import { Button, MText } from "@/components";

export default function Home() {
  return (
    <main>
      <MText as="h1" weight="extrabold" size="4xl" textAlign="center">
        hello world
      </MText>
      <Button
        color="white"
        variant="sm"
        weight="semibold"
        size="base"
        textAlign="center"
      >
        Sign Up Free
      </Button>
      <Button
        color="white"
        variant="lg"
        weight="bold"
        size="2xl"
        textAlign="center"
      >
        Sign Up Free
      </Button>
    </main>
  );
}
