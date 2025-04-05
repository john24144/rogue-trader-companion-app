package app.origin;

import app.characterSheet.CharacterSheet;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Origin {
  @Id private Long id;
  @OneToOne private CharacterSheet characterSheet;
  private String homeWorld;
  private String birthright;
  private String lureOfTheVoid;
  private String trialAndTravails;
  private String motivation;
  private String career;
}
