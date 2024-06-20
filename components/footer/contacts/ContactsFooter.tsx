import { Navigate } from "@/components/navigation/Navigate";

export const ContactsFooter = () => {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
      <p>
        <Navigate navigateTo="./contacts">Contacts Info</Navigate>
      </p>
    </footer>
  );
};
