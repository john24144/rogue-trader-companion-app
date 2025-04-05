package app.characteristics;

import app.characterSheet.CharacterSheet;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Characteristics {
  @Id @GeneratedValue private Long id;

  @OneToOne private CharacterSheet characterSheet;

  private int weaponSkill;
  private int ballisticSkill;
  private int strength;
  private int toughness;
  private int agility;
  private int intelligence;
  private int willPower;
  private int fellowship;
}
