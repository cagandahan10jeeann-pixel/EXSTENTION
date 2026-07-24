
# Function to display the profile
def display_profile(pet, name, nickname, birthday, address, fav_song, motivation, support):
    if pet.lower() == "dog":
        print("🐶 🐶 🐶")
    else:
        print("🐱 🐱 🐱")

    print(f"Name       : {name} / {nickname}")
    print(f"Birthday   : {birthday}")
    print(f"Address    : {address}")
    print(f"Fav Song   : {fav_song}")
    print(f"Motivation : {motivation}")
    print(f"Support    : {support}")


# Your information (Edit these)
pet = "Dog"  # Change to "Cat" if you're a cat person
name = "Jee Ann Cagandahan"
nickname = "Jee"
birthday = "04/11/2006"
address = "Brgy.Magcapay leon, Iloilo"
fav_song = "Intention by Starfall"
motivation = "My family and my future."
support = "It would be more comfortable if I could manage my time well and understand the lesson."

# Display the profile
display_profile(
    pet,
    name,
    nickname,
    birthday,
    address,
    fav_song,
    motivation,
    support
)
