// "use client";
// import { Navigate } from "@/components/navigation/Navigate";
// import { useCart } from "@/context/cart/CartContext";

// export default function moviesPaginationLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { state } = useCart();
//   return (
//     <>
//       <header className="m-4">
//         <article>
//           <span> {state.totalAmount} -SEK </span>
//           <Navigate navigateTo="./checkout">Checkout</Navigate>
//         </article>
//       </header>
//       <main>{children}</main>
//       <footer></footer>
//     </>
//   );
// }
