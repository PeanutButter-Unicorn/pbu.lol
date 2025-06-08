    // src/App.tsx
    import { AppShell, Burger, Group, Title, Text, Container, Button, Stack, Center } from '@mantine/core';
    import { useDisclosure } from '@mantine/hooks';

    function App() {
      const [opened, { toggle }] = useDisclosure();

      return (
        <AppShell
          header={{ height: 60 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
          padding="md"
        >
          <AppShell.Header>
            <Group h="100%" px="md">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Title order={3}>pbu.lol</Title>
            </Group>
          </AppShell.Header>

          <AppShell.Navbar p="md">
            Navbar
            {/* Add navigation links here later */}
          </AppShell.Navbar>

          <AppShell.Main>
            <Container>
              <Stack align="center" mt="xl" gap="lg">
                <Title order={1} ta="center">Welcome to pbu.lol</Title>
                <Text size="xl" ta="center">Your Expert Software Consulting Partner</Text>
                <Text c="dimmed" ta="center">
                  Crafting high-quality software solutions tailored to your needs.
                </Text>
                <Button size="lg" mt="md">Get in Touch</Button>
              </Stack>
            </Container>
          </AppShell.Main>
        </AppShell>
      );
    }

    export default App;
    