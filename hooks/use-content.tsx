import { useState } from "react"

export function useContent() {
  // This hook would typically fetch and manage content for subsections.
  // For now, it provides static content as a placeholder.
  const getContentForSubsection = (subsectionId: string) => {
    switch (subsectionId) {
      case "1.1":
        return {
          title: "Definisi dan fungsi media tanam dalam sistem hidroponik",
          content: `
            <p>Media tanam dalam hidroponik adalah bahan non-tanah yang berfungsi sebagai penopang fisik bagi tanaman dan media untuk mengalirkan larutan nutrisi.</p>
            <p>Fungsi utamanya meliputi:</p>
            <ul>
              <li>Menopang akar tanaman agar tidak roboh.</li>
              <li>Menyediakan ruang bagi sirkulasi udara dan air.</li>
              <li>Menyimpan kelembaban dan nutrisi untuk diserap akar.</li>
            </ul>
          `,
        }
      case "1.2":
        return {
          title: "Karakteristik media tanam yang ideal",
          content: `
            <p>Media tanam hidroponik yang ideal memiliki beberapa karakteristik:</p>
            <ul>
              <li>Ringan dan mudah diangkut.</li>
              <li>Tidak mengandung unsur hara yang berlebihan.</li>
              <li>Memiliki porositas yang baik untuk aerasi dan drainase.</li>
              <li>Stabil secara kimia dan tidak mudah terurai.</li>
              <li>pH netral atau mendekati netral.</li>
            </ul>
          `,
        }
      case "2.1":
        return {
          title: "Media tanam organik",
          content: `
            <p>Media tanam organik berasal dari bahan alami yang dapat terurai. Contohnya:</p>
            <ul>
              <li><strong>Cocopeat:</strong> Serbuk sabut kelapa, memiliki daya serap air tinggi.</li>
              <li><strong>Rockwool:</strong> Serat mineral yang ringan dan steril.</li>
              <li><strong>Sekam Bakar:</strong> Kulit padi yang dibakar, meningkatkan drainase.</li>
            </ul>
          `,
        }
      case "2.2":
        return {
          title: "Media tanam anorganik",
          content: `
            <p>Media tanam anorganik terbuat dari bahan mineral atau sintetis yang tidak mudah terurai. Contohnya:</p>
            <ul>
              <li><strong>Hidroton (Clay Pebbles):</strong> Bola-bola tanah liat bakar, sangat baik untuk aerasi.</li>
              <li><strong>Perlite:</strong> Batuan vulkanik ringan, meningkatkan aerasi dan drainase.</li>
              <li><strong>Vermiculite:</strong> Mineral silikat, memiliki daya serap air dan nutrisi yang baik.</li>
            </ul>
          `,
        }
      default:
        return {
          title: "Konten Tidak Ditemukan",
          content: "<p>Silakan pilih sub-bagian untuk melihat konten.</p>",
        }
    }
  }

  return {
    getContentForSubsection,
  }
}
