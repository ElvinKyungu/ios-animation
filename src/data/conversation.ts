import jessicaAvatar from '@/assets/jess.jpeg'
import elonAvatar from '@/assets/elon.jpg'
import gabrielAvatar from '@/assets/gabriel.jpeg'
import debyamAvatar from '@/assets/debyam.jpeg'
import antFuAvatar from '@/assets/antfu.jpg'
import luriAvatar from '@/assets/antfu.jpg'
import katyaAvatar from '@/assets/antfu.jpg'
import type{ Conversation } from '@/type/whatsapp'

export const conversationsData: Conversation[] = [
    {
      id: 1,
      image: gabrielAvatar,
      name: "Gabriel",
      lastMessage: "Tu as réussi à corriger le bug ?",
      messages: [
        { content: "Mais Elvin, focus sur le code", sender: "emetteur", hour: "12:13 PM" },
        { content: "Je suis concentré, ne t’inquiète pas !", sender: "recepteur", hour: "12:15 PM" },
        { content: "Tu as réussi à corriger le bug ?", sender: "emetteur", hour: "12:17 PM" },
        { content: "Oui, tout est sous contrôle.", sender: "recepteur", hour: "12:20 PM" }
      ]
    },
    {
      id: 2,
      image: elonAvatar,
      name: "Elon Musk",
      lastMessage: "Prêt pour le lancement de la nouvelle fonctionnalité ?",
      messages: [
        { content: "Comment avance le projet ?", sender: "emetteur", hour: "11:00 AM" },
        { content: "Très bien, nous finalisons les derniers détails.", sender: "recepteur", hour: "11:05 AM" },
        { content: "Parfait, prêt pour le lancement de la nouvelle fonctionnalité ?", sender: "emetteur", hour: "11:10 AM" },
        { content: "Tout est prêt pour demain.", sender: "recepteur", hour: "11:15 AM" }
      ]
    },
    {
      id: 3,
      image: antFuAvatar,
      name: "Anthony Fu",
      lastMessage: "N'oublie pas de faire une PR pour le refactoring.",
      messages: [
        { content: "J'ai vu ta dernière PR, bon travail.", sender: "emetteur", hour: "10:00 AM" },
        { content: "Merci, je vais continuer sur cette lancée.", sender: "recepteur", hour: "10:10 AM" },
        { content: "N'oublie pas de faire une PR pour le refactoring.", sender: "emetteur", hour: "10:20 AM" },
        { content: "Je m'en occupe tout de suite.", sender: "recepteur", hour: "10:25 AM" }
      ]
    },
    {
      id: 2,
      image: katyaAvatar,
      name: "Katya",
      lastMessage: "On se met d'accord sur le design final avant la review ?",
      messages: [
        { "content": "Katya, tu as pu avancer sur la nouvelle UI ?", "sender": "emetteur", "hour": "11:00 AM" },
        { "content": "Oui, je l'ai intégrée hier soir. Il reste juste à vérifier le responsive.", "sender": "recepteur", "hour": "11:10 AM" },
        { "content": "Top ! On se met d'accord sur le design final avant la review ?", "sender": "emetteur", "hour": "11:15 AM" },
        { "content": "Bonne idée, on pourra faire un dernier check ensemble cet après-midi.", "sender": "recepteur", "hour": "11:20 AM" },
        { "content": "Super, je vais préparer les points à revoir.", "sender": "emetteur", "hour": "11:25 AM" }
      ]
    },
    {
      id: 1,
      image: luriAvatar,
      name: "Luri",
      lastMessage: "Est-ce que le rapport est prêt pour la réunion de cet après-midi ?",
      messages: [
        { "content": "Gabriel, tu as pu avancer sur le rapport de la réunion ?", "sender": "emetteur", "hour": "9:00 AM" },
        { "content": "Oui, je viens de le finaliser. Il est prêt.", "sender": "recepteur", "hour": "9:05 AM" },
        { "content": "Parfait, je vais le passer en revue avant la réunion.", "sender": "emetteur", "hour": "9:10 AM" },
        { "content": "D'accord, tiens-moi au courant si tu as des remarques.", "sender": "recepteur", "hour": "9:15 AM" },
        { "content": "Est-ce que tout est à jour dans la partie technique ?", "sender": "emetteur", "hour": "9:20 AM" },
        { "content": "Oui, j'ai inclus les derniers ajustements côté frontend.", "sender": "recepteur", "hour": "9:25 AM" }
      ]
    },
    {
      id: 4,
      image: jessicaAvatar,
      name: "Jessica Sachs",
      lastMessage: "As-tu besoin d'aide avec la documentation ?",
      messages: [
        { content: "Salut Elvin, comment ça se passe de ton côté ?", sender: "emetteur", hour: "2:00 PM" },
        { content: "Très bien, je suis en plein dans le développement.", sender: "recepteur", hour: "2:05 PM" },
        { content: "As-tu besoin d'aide avec la documentation ?", sender: "emetteur", hour: "2:10 PM" },
        { content: "Peut-être pour quelques sections, je te fais signe.", sender: "recepteur", hour: "2:15 PM" }
      ]
    },
    {
      id: 5,
      image: debyamAvatar,
      name: "Integrity",
      lastMessage: "Nous devons revoir les tests unitaires.",
      messages: [
        { content: "Salut, on est bon pour le déploiement ?", sender: "emetteur", hour: "9:00 AM" },
        { content: "Presque, je fais les derniers tests.", sender: "recepteur", hour: "9:10 AM" },
        { content: "Nous devons revoir les tests unitaires.", sender: "emetteur", hour: "9:15 AM" },
        { content: "Je m'en occupe, pas de souci.", sender: "recepteur", hour: "9:20 AM" }
      ]
    }
  ]
