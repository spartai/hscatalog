package cardcatalog.main.controllers;

import cardcatalog.main.entities.Card;
import cardcatalog.main.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

public class CardController {

    @Autowired
    private CardRepository cardRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Card>> getAll(){
        return new ResponseEntity(cardRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Card> get(@PathVariable Long id){
        Optional<Card> card = cardRepository.findById(id);
        if (!card.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(card.get());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Card> update(@PathVariable Long id, @RequestBody Card card) {
        Optional<Card> oCard = cardRepository.findById(id);
        if (oCard.isPresent()) {
            card.setId(id);
            return ResponseEntity.ok(cardRepository.save(card));
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("")
    public ResponseEntity<Card> post(@RequestBody Card card) {
        return ResponseEntity.ok(cardRepository.save(card));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Card> delete(@PathVariable Long id) {
        Optional<Card> card = cardRepository.findById(id);
        if (!card.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        cardRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
