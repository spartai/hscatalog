package cardcatalog.main.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "message")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Deck extends BaseEntity {

    @JsonIgnore
    @ManyToMany(targetEntity = Card.class)
    private List<Deck> cards;
}
