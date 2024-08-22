import React from "react";

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Mechanics highlight</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <img
              src="/mechanic/rift-throwable.gif"
              alt="Rift-crossing throwable"
            />
            <h3>Rift-crossing throwables</h3>
            <p>
              Even if you aren’t together physically, you can still help each
              other out! Objects can pass over the split screen.
            </p>
          </div>
          <div className="feature-item">
            <img src="/mechanic/laser.gif" alt="Laser" />
            <h3>Lasers</h3>
            <p>
              Not just physical objects, even light passes through the rift!
              Lasers are essential for opening doors and powering parts of the
              level.
            </p>
          </div>
          <div className="feature-item">
            <img src="/mechanic/tether.gif" alt="Tether" />
            <h3>Tether</h3>
            <p>
              Stretch the laws of physics to make your way to your other half!
              Physics based puzzles will make your brain itch.
            </p>
          </div>
          <div className="feature-item">
            <img src="/mechanic/merge.gif" alt="Stitch together fragments" />
            <h3>Stitching fragments</h3>
            <p>
              Two halves make a whole! Work together to piece the solution
              together! Some objects need to be placed together in order to use
              them.
            </p>
          </div>
          <div className="feature-item">
            <img src="/mechanic/ghost.gif" alt="Rift-crossing statics" />
            <h3>Rift-crossing statics</h3>
            <p>
              Perspective and orientation are essential! The rift is always
              perpendicular to the players and you will need to use this to your
              advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
