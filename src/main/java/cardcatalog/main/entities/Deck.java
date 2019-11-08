package cardcatalog.main.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "decks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Deck extends BaseEntity {


    @ManyToMany(targetEntity = Card.class)
    private List<Card> cards = new ArrayList<>();


    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private String name;


}
