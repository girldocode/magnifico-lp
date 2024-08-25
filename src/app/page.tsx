import { MText } from "@/components";

export default function Home() {
  return (
    <main className="bg-blue-gray-900">
      <MText as="h1" weight="extrabold" size="4xl" textAlign="center">
        hello world
      </MText>
      {/* <Button
        color="white"
        variant="sm"
        weight="semibold"
        size="base"
        textAlign="center"
      >
        Sign Up Free
      </Button> */}
      {/* <Button
        color="white"
        variant="lg"
        weight="bold"
        size="2xl"
        textAlign="center"
      >
        Sign Up Free
      </Button> */}
      {/* <InlineButton
        color="blue-600"
        variant="blue"
        weight="medium"
        size="base"
        textAlign="center"
      >
        See how it helped others
      </InlineButton> */}
      {/* <InlineButton
        color="white"
        variant="white"
        weight="medium"
        size="base"
        textAlign="center"
      >
        Improve workflow
      </InlineButton> */}
    </main>
  );
}
