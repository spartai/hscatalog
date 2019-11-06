package cardcatalog.main.controllers;

import java.util.Optional;

import cardcatalog.main.entities.Deck;
import cardcatalog.main.repositories.DeckRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/{id}")
    public ResponseEntity<Deck> get(@PathVariable Long id) {
        Optional<Deck> deck = deckRepository.findById(id);
        if (!deck.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(deck.get());
    }

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