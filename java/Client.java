import com.nayarsystems.nexus.NexusClient;

import java.net.URI;
import java.net.URISyntaxException;

public class Client {
   public static void main(String[] args) throws URISyntaxException {
      NexusClient client = new NexusClient(new URI("ws://localhost:443"));

      client.login("root", "root", (x, errLogin) -> {
         client.pushTask("demo.hello", null, 10, null, null, null, (response, err) -> {
            if (err != null) {
               System.err.println(err);
            } else {
               System.out.println("Response received: " + response);
            }

            client.close();
         });
      });
   }
}
