package cardcatalog.main.repositories;

import cardcatalog.main.entities.UserDecks;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserDecksRepository extends CrudRepository<UserDecks, Long> {

}
