
class Book:
    def __init__(self, title, author, is_borrowed=False, borrowed_by=""):
        self.title = title
        self.author = author
        self.is_borrowed = is_borrowed
        self.borrowed_by = borrowed_by


# Sample Data
books = [
    Book("Python Basics", "Ana Cruz"),
    Book("Django for Students", "Mark Reyes"),
    Book("Data Structures", "Lea Santos")
]


def show_all_books():
    print("\n--- ALL BOOKS ---")
    for book in books:
        status = "Borrowed" if book.is_borrowed else "Available"

        print(f"Title       : {book.title}")
        print(f"Author      : {book.author}")
        print(f"Status      : {status}")

        if book.is_borrowed:
            print(f"Borrowed By : {book.borrowed_by}")

        print("-" * 30)


def borrow_book():
    title = input("Enter the book title to borrow: ")

    for book in books:
        if book.title.lower() == title.lower():
            if not book.is_borrowed:
                student = input("Enter student name: ")
                book.is_borrowed = True
                book.borrowed_by = student
                print(f'"{book.title}" has been borrowed by {student}.')
            else:
                print("Book is already borrowed.")
            return

    print("Book not found.")


def return_book():
    title = input("Enter the book title to return: ")

    for book in books:
        if book.title.lower() == title.lower():
            if book.is_borrowed:
                book.is_borrowed = False
                book.borrowed_by = ""
                print(f'"{book.title}" has been returned.')
            else:
                print("This book is already available.")
            return

    print("Book not found.")


def show_available_books():
    print("\n--- AVAILABLE BOOKS ---")
    found = False

    for book in books:
        if not book.is_borrowed:
            print(f"{book.title} by {book.author}")
            found = True

    if not found:
        print("No available books.")


def show_borrowed_books():
    print("\n--- BORROWED BOOKS ---")
    found = False

    for book in books:
        if book.is_borrowed:
            print(
                f"{book.title} by {book.author} "
                f"(Borrowed by: {book.borrowed_by})"
            )
            found = True

    if not found:
        print("No borrowed books.")


# Program Flow
while True:
    print("\n===== LIBRARY BOOK BORROWING SYSTEM =====")
    print("1. Show All Books")
    print("2. Borrow a Book")
    print("3. Return a Book")
    print("4. Show Available Books")
    print("5. Show Borrowed Books")
    print("6. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        show_all_books()
    elif choice == "2":
        borrow_book()
    elif choice == "3":
        return_book()
    elif choice == "4":
        show_available_books()
    elif choice == "5":
        show_borrowed_books()
    elif choice == "6":
        print("Thank you for using the Library Book Borrowing System!")
        break
    else:
        print("Invalid choice. Please try again.")