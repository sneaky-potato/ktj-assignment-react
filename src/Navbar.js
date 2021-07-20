let currentUser;
function Navbar() {
  const sample_nym = ['EagerTetra', 'LovelyGoat', 'ElfinProse', 'LowUnit', 'WildSeal', 'MuteHuman', 'GenuineShark', 'LongWolf', 'PaleWasp', 'HotLynx', 'SaltySeal', 'KinkyDaddy', 'HorneyHornet', 'SneayPotato'];
  currentUser = sample_nym[Math.floor(Math.random()*sample_nym.length)] + ' # ' + Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);

  return (
    <div className="Navbar">
      <div className="logo">
            Cap'n Cododo getSocial
        </div>
        <ul>
            <li><a href = "/sign-up">Sign Up</a></li>
            <li><a href = "/sign-in">Sign In / Change Account</a></li>
            <li><a href="/">{currentUser}</a></li>
        </ul>
    </div>
  );
}

export {Navbar, currentUser};
