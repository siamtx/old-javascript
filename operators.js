// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}
function isHit()
{
    let value = Math.random();
    if (value > .5)
    {
        return true;
        console.log("We are taking fire, Jim! Evasive manuevers!");
    }
    else (value < .5)
    {
        return false;
    }

}
function shipCanFire()
{
    if (shipAmmo > 0 && shipHealth > 0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function isDestroyed(health)
{
    if (health <= 0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function reloadShip()
{
    if (shipAmmo <= 0 && isDestroyed != true)
    {
        console.log("shipHealth -1 and shipAmmo +3");
        shipHealth -- & shipAmmo +3;
    }
}

