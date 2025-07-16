import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function App() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>My Shadcn UI App</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Click me</Button>
        </CardContent>
      </Card>
    </div>
  );
}
export default App;
