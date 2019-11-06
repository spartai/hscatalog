package cardcatalog.main.repositories;

import cardcatalog.main.entities.Card;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardRepository extends CrudRepository<Card, Long> {
    Optional<Card> findByName(String name);


    List<Card> findAllByMana (int mana);

    List<Card> findAllByDamage (int damage);

    List<Card> findAllByHp (int hp);

    List<Card> findAllByCardClass (String cardClass);
}
