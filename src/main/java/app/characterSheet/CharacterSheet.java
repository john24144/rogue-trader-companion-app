package app.characterSheet;

import app.characteristics.Characteristics;
import app.origin.Origin;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class CharacterSheet {
  @Id @GeneratedValue private long id;

  private String name;

  @OneToOne private Characteristics characteristics;
  @OneToOne private Origin origin;
}
