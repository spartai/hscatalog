package cardcatalog.main.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cards")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Card extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String mana;

    @Column
    private int damage;

    @Column
    private int hp;

    @Column
    private String description;

    @Column(nullable = false)
    private String imgsrc;

    @Column
    private String cardClass;

    @ManyToMany(targetEntity = Deck.class, mappedBy = "cards")
    private List<Deck> decks;

}
