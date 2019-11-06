package cardcatalog.main.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "decks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Deck extends BaseEntity {

    @JsonIgnore
    @ManyToMany(targetEntity = Card.class)
    private List<Card> cards;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Long userid;

    @Column(nullable = false)
    private String name;


}
