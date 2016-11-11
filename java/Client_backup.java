import com.nayarsystems.nexus.NexusClient;

import java.net.URI;
import java.net.URISyntaxException;

public class Client {
    public static void main(String[] args) throws URISyntaxException {
        NexusClient client = new NexusClient(new URI("ws://localhost"));

        client.login("root", "root", (x) -> {
            client.pushTask("demo.hello", null, null, null, null, null, (response, error) -> {
                System.out.println("Response received: " + response);

                client.close();
            });
        });
    }
}
