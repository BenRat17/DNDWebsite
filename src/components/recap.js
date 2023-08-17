import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './recapStyle.scss';
import NavBar from './navbar';

const recap = () => {
  return (
  <>
  <NavBar/>
    <div className='header'>“A journey of a thousand miles must begin with a single step.”
    ― Lao Tzu
    </div>
    <div>
    <Accordion>
     <Accordion.Item eventKey="0">
      <Accordion.Header className='acc-header'>Prologue</Accordion.Header>
      <Accordion.Body>
      Two-hundred years ago the world’s Necromancers came to believe they had the means and the right to rule over the living  as well as the dead. A conclave of powerful necromancers amassed the largest force of undead the world has ever seen and began strategically wiping out smaller villages overnight to gather more troops and to prevent word from traveling too fast to larger nations and settlements. Just after a few short years when leaders started to realize the grave situation they faced it was almost too late. Cities were overrun in mere days, each soldier killed only swelled the ranks of the lifeless horde. The survivors named this atrocity, The Profane March.  Just when all seemed lost an entity appeared from the heavens and offered an accord with the ever dwindling populace. Forge a pact with the celestial entity and be granted the strength to fight back against the undead. Having no other choice those left that could fight swore an oath to the being and were given immense power. With scorching rays of celestial fire the Bestowed were able turn back the tide of the apocalypse.
After The Profane March the destruction was so vast and consuming that a new era of recorded time had to be established. Everyone agrees that the March was the single most horrific event to have ever befouled Toril. Thus lead to the global outlaw of Necromancy and a strict regulation of all magical practices.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header className='acc-header'>A Royal Invitation</Accordion.Header>
      <Accordion.Body>
        A group of old friends and adventurers reunite once more for a very special occasion. One of their number is finally to be wed. As is tradition his cohorts must accompany the groom on a "Stag Hunt" wherein they must all collect 3 tokens to prove the groom's worth.
        The old tales mention a simple poem in which to guide the hunters; "Go forth, be bold. Seek Treasures New and Memories Old. Enlist aid from those you trust. Seek the kindness of others, a gift that will never rust. "
        The band of would be treasure seekers converges on the city of Waterdeep, a haven for coin and crime in equal measure. While out on the town they are approached by a most curious half-elf messenger, addorned 
        with the heraldry of the Masked Lords, he carries a invitation to meet with the Queen of Glee, a most unusual occurence. 
        Not ones to disrepect the local rulers our troop accepts and makes their way to the Queen's Gardens. 
        Upon arrival the Queen bids all attendants to leave the throne room save for two advisors. The Queen offers a most secretive mission; venture to the quarantined islands off the coast of Waterdeep and discover what happened to her cartographer and his escort. In return
        they would receive first claim to lands on the islands as well as the first fortress built there once the Queen is able to prove that the islands are no longer a threat.
        Under the cover of night they steal away with a small fishing boat to the isle of Ruathym.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header className='acc-header'>A Sticky Situation</Accordion.Header>
      <Accordion.Body>
        After a brief rest at the intermediate island of Finback, the group finds themselves under seige from a duet of water elementals as they attack to boat. Those attuned to the arcane discover that these water elementals were not formed willingly, almost as if they were transported here from the Water Plane. 
        The party pushes onward to the dock at Ruathym. Once theyve disembarked they see that whoever was here last tried to evacuate the small populace. Barricade where erected facing the inward part of the island, suggesting they 
        were defending themselves as they tried to leave. Backed into a corner there were no survivors from whatever tragedy befell this dockside town. 
        Just then the group is ambushed by giant spiders that seem to blur in and out of reality, Phase Spiders. Once the Queen Spider was slain the group quickly finds the remains of the cartographer and takes his journal and a few 
        odd gemstones and make their way back to the ship and set sail for WaterDeep.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header className='acc-header'>An Undead Immigration </Accordion.Header>
      <Accordion.Body>
       Landing once again on the shores of the island of Finback to rest before making the last leg of the journey back to Waterdeep, our party takes some much needed time to enjoy the local festivites.
       Mostly games of chance, they gamble their coin late into the evening making merry. 
       In the small hours of the morning the tavern hears a far away cry, being a rough and tumble place most don't give it a second thought. However, minutes later the tavern common room erupts into chaos as three shambling corpses work their way in. 
       The group is able to dispatch the threat but hearing more commotion outside they run out to discover the whole town is under attack. Buildings on fire, townsfolk running everywhere, innumerable zombies chasing after the villagers. Realizing this was a fight they could not take on alone
       they scramble towards their ship and the few reamining survivors barely escape the slaughter. As they drift away from the catastrophy a single figure floats into view, a Death Tyrant and a horde of zombies surround the docks and stare unblinking into each and everyone's eyes.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </div>
  </>
  );
}

export default recap;