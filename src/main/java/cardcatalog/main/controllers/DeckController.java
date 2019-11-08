package cardcatalog.main.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import cardcatalog.main.entities.Card;
import cardcatalog.main.entities.Deck;
import cardcatalog.main.entities.User;
import cardcatalog.main.repositories.CardRepository;
import cardcatalog.main.repositories.DeckRepository;
import cardcatalog.main.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("deck")
public class DeckController {

    @Autowired
    private DeckRepository deckRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CardRepository cardRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Deck> get(@PathVariable Long id) {
        Optional<Deck> deck = deckRepository.findById(id);
        if (!deck.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(deck.get());
    }

    @GetMapping("/byuserid/{uid}")
    public ResponseEntity<Deck> getByUserid(@PathVariable Long uid) {
        return new ResponseEntity(deckRepository.findAllByUser(
                userRepository.findById(uid).get()
        ), HttpStatus.OK);
    }

    @GetMapping("/byusername/{uname}")
    public ResponseEntity<Deck> getByUserid(@PathVariable String uname) {
        return new ResponseEntity(deckRepository.findAllByUser(
                userRepository.findByUsername(uname).get()
        ), HttpStatus.OK);
    }

    /*
    @PostMapping("/add/{deckid}/{cardid}")
    public ResponseEntity<Deck> addCard(@PathVariable Long did, @PathVariable Long cid) {
        Optional<Deck> oDeck = deckRepository.findById(did);
        Optional<Card> oCard = cardRepository.findById(cid);
        if(oDeck.isPresent() && oCard.isPresent()) {
            List<Card> cards = oDeck.get().getCards();
            cards.add(oCard.get());
            oDeck.get().setCards(cards);
            return ResponseEntity.ok(deckRepository.save(oDeck.get()));
        }
        return ResponseEntity.notFound().build();
    }
    */

    @PutMapping("/{id}")
    public ResponseEntity<Deck> update(@PathVariable Long id, @RequestBody Deck deck) {
        Optional<Deck> oDeck = deckRepository.findById(id);
        if (oDeck.isPresent()) {
            deck.setId(id);
            return ResponseEntity.ok(deckRepository.save(deck));
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("")
    public ResponseEntity<Deck> post(@RequestBody Deck deck) {
        return ResponseEntity.ok(deckRepository.save(deck));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Deck> delete(@PathVariable Long id) {
        Optional<Deck> deck = deckRepository.findById(id);
        if (!deck.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        deckRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}