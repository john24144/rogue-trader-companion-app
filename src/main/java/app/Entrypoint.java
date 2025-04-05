package app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public final class Entrypoint {
  private Entrypoint() {
    // Prevent instantiation
  }

  public static void main(final String[] args) {
    SpringApplication.run(Entrypoint.class, args);
  }
}
